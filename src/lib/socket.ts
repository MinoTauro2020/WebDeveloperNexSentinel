import { Server } from 'socket.io';

export function setupSocket(io: Server) {
  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });

    // Handle security scan events
    socket.on('scan:start', (data) => {
      console.log('Scan started:', data);
      // Emit progress updates
      socket.emit('scan:progress', { status: 'scanning', progress: 0 });
    });

    // Handle incident reports
    socket.on('incident:report', (data) => {
      console.log('Incident reported:', data);
      socket.emit('incident:received', { 
        status: 'received',
        message: 'Your incident report has been received. Our team will contact you shortly.'
      });
    });

    // Real-time notifications
    socket.on('subscribe:alerts', () => {
      socket.join('security-alerts');
      console.log('Client subscribed to security alerts');
    });
  });

  // Broadcast system status every 30 seconds
  setInterval(() => {
    io.to('security-alerts').emit('system:status', {
      status: 'online',
      timestamp: new Date().toISOString(),
      activeIncidents: 0,
      systemHealth: 'healthy'
    });
  }, 30000);

  return io;
}

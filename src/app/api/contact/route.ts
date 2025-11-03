import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "online",
    message: "Contact API is ready to receive incident reports",
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { company, email, incidentType, description, urgency } = body;

    // Validate required fields
    if (!company || !email || !incidentType || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // In production, this would:
    // 1. Store in database
    // 2. Send notifications to security team
    // 3. Create ticket in incident management system
    // 4. Send confirmation email to client

    const incident = {
      id: generateIncidentId(),
      company,
      email,
      incidentType,
      description,
      urgency: urgency || "medium",
      status: "received",
      createdAt: new Date().toISOString(),
      estimatedResponseTime: getResponseTime(urgency || "medium"),
    };

    // Log incident (in production, save to database)
    console.log("New incident reported:", incident);

    return NextResponse.json({
      success: true,
      message: "Incident report received successfully",
      incident: {
        id: incident.id,
        status: incident.status,
        estimatedResponseTime: incident.estimatedResponseTime,
      },
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function generateIncidentId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 7);
  return `INC-${timestamp}-${random}`.toUpperCase();
}

function getResponseTime(urgency: string): string {
  switch (urgency) {
    case "critical":
      return "< 1 hour";
    case "high":
      return "< 4 hours";
    case "medium":
      return "< 24 hours";
    case "low":
      return "< 48 hours";
    default:
      return "< 24 hours";
  }
}

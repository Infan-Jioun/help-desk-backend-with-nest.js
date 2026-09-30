import { Injectable } from '@nestjs/common';
import { Ticket } from './ticket.interface.js';

@Injectable()
export class TicketsService {
    private readonly tickets: Ticket[] = [
        {
            id: 1,
            subject: "Cannot Login to account",
            description: "User cannot access the dashboard after login with valid credentials.",
            priority: "high",
            status: "open",
            createdAt: "2026-09-01T10:00:00.000Z",
        },
        {
            id: 2,
            subject: "Payment Failed",
            description: "Credit card payment declined during invoice renewal checkout.",
            priority: "high",
            status: "open",
            createdAt: "2026-09-02T14:30:00.000Z",
        },
        {
            id: 3,
            subject: "Email notifications not delivered",
            description: "Automated email alerts are not being received for assigned tickets.",
            priority: "medium",
            status: "closed",
            createdAt: "2026-09-03T09:15:00.000Z",
        },
        {
            id: 4,
            subject: "Request for dark mode option",
            description: "User requested a toggle switch for dark theme support in dashboard settings.",
            priority: "low",
            status: "closed",
            createdAt: "2026-09-04T16:45:00.000Z",
        },
    ]
    findAll() {
        return this.tickets
    }
}

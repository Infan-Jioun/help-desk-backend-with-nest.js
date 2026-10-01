import { Controller, Get, NotFoundException, Param, ParseIntPipe, Query } from '@nestjs/common';
import { TicketsService } from './tickets.service.js';
import * as ticketInterface from './ticket.interface.js';

@Controller('tickets')
export class TicketsController {
    constructor(private readonly ticketsService: TicketsService) { }
    @Get()
    findAll(
        @Query("status") status?: ticketInterface.Ticket["status"],
        @Query("priority") priority?: ticketInterface.Ticket["priority"],
    ){
        return this.ticketsService.findAll(status, priority);
    }
    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id: number): ticketInterface.Ticket {
        const ticket = this.ticketsService.findOne(id);
        if (!ticket) {
            throw new NotFoundException(`Ticket with ID ${id} not found`);
        }
        return ticket;
    }
}

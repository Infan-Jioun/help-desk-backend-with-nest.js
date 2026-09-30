import { Controller, Get, NotFoundException, Param, ParseIntPipe } from '@nestjs/common';
import { TicketsService } from './tickets.service.js';

@Controller('tickets')
export class TicketsController {
    constructor(private readonly ticketsService: TicketsService) { }
    @Get()
    findAll() {
        return this.ticketsService.findAll();
    }
    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id: number) {
        const ticket = this.ticketsService.findOne(id);
        if (!ticket) {
            throw new NotFoundException(`Ticket with ID ${id} not found`);
        }
        return ticket;
    }
}

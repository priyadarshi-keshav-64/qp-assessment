import { Controller, Get, Post } from "@nestjs/common";

@Controller('payment')
export class PaymentController {
    // once payment webhook receives then we update the order and inventory accordingly
    @Get('webhook')
    async handlePaymentWebhook() {

    }
}
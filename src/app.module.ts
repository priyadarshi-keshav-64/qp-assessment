import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './module/users/users.module';
import { AuthModule } from './module/auth/auth.module';
import { GroceryModule } from './module/grocery/grocery.module';
import { InventoryModule } from './module/inventory/inventory.module';
import { OrdersModule } from './module/orders/order.module';
import { PaymentModule } from './module/payment/payment.module';
import { GroceryItemsEntity } from './entities/grocery-items.entity';
import { InventoryEntity } from './entities/inventory.entity';
import { InventoryLogsEntity } from './entities/inventory-logs.entity';
import { OrderItemsEntity } from './entities/order-items.entity';
import { OrdersEntity } from './entities/orders.entity';
import { UsersEntity } from './entities/users.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [
          GroceryItemsEntity, InventoryEntity, InventoryLogsEntity, OrderItemsEntity, OrdersEntity, UsersEntity
        ],
        synchronize: true,
        logging: true
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
    GroceryModule,
    InventoryModule,
    OrdersModule,
    PaymentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

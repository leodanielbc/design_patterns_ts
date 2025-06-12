import { DataSource } from 'typeorm';
import { User } from './User';

export class UserQueryBuilder {
    
    private query;

    constructor(dataSource: DataSource) {
        this.query = dataSource.getRepository(User).createQueryBuilder('user');
    }

    filterByName(name: string): this {
        this.query.andWhere("user.name ILIKE :name", { name: `%${name}%` });
        return this;
    }

    filterByEmail(email: string): this {
        this.query.andWhere("user.email ILIKE :email", { email });
        return this;
    }

    filterByPhone(phone: string): this {
        this.query.andWhere("user.phone ILIKE :phone", { phone });
        return this;
    }

    filterByAgeGreaterThan(age: number): this {
        this.query.andWhere("user.age > :age", { age });
        return this;
    }

    orderByCreatedAfter(date: Date): this {
        this.query.andWhere("user.createdAt > :date", { date });
        return this;
    }

    orderByCreatedDesc(): this {
        this.query.orderBy("user.createdAt", "DESC");
        return this;
    }

    orderByCreatedBetween(startDate: Date, endDate: Date): this {
        this.query.andWhere("user.createdAt BETWEEN :startDate AND :endDate", { startDate, endDate });
        return this;
    }


    build() {
        return this.query;        
    }
}
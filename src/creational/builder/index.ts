import 'reflect-metadata';
import { UserQueryBuilder } from './UserQueryBuilder';
import { AppDataSource } from './data-source';


console.log('Builder Pattern');

type UserFilters = {
    name?: string;
    age?: number;
    email?: string;
    startDate?: Date;
    endDate?: Date;
    orderDesc?: boolean;
};

async function main(filters: UserFilters){
    
    await AppDataSource.initialize();
    
    const builder = new UserQueryBuilder(AppDataSource);

    if (filters.name) builder.filterByName(filters.name);
    if (filters.age) builder.filterByAgeGreaterThan(filters.age);
    if (filters.email) builder.filterByEmail(filters.email);
    if (filters.startDate && filters.endDate) builder.orderByCreatedBetween(filters.startDate, filters.endDate);
    if (filters.orderDesc) builder.orderByCreatedDesc();
    
    const users = await builder.build().getMany();

    console.log('Users:', users);
}

const filters = {
    name: "juan",
    age: 18,
    email: "",
    orderDesc: true,
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-12-31')
}

main(filters).catch(console.error);

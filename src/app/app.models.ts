export class Person {
    firstName: string;
    lastName: string;
    birthDate: Date;
    gender: string;
    location: string;
    phone: string;
    email: string;
    photoUrl: string;
}

export class Position {
    name: string;
    where: string;
    startedAt: Date;
    finishedAt?: Date;
    experiences: string[];
}

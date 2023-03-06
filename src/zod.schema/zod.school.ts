import { TypeOf, z } from 'zod';

export const studentCheck = z.object({
    body: z.object({
      name: z.string({
        required_error: 'NAME IS REQUIRED !',
        invalid_type_error: 'IT MUST BE A STRING !'
    }),
    age:z.string({
        required_error: 'AGE IS REQUIRED !',
        invalid_type_error: 'IT MUST BE A STRING !'
    }),
    major:z.string({
        required_error: 'AGE IS REQUIRED !',
        invalid_type_error: 'IT MUST BE A STRING !'
    }),
    })
})

export const teacherCheck = z.object({
    body: z.object({
      name: z.string({
        required_error: 'NAME IS REQUIRED !',
        invalid_type_error: 'IT MUST BE A STRING !'
    }),
    

    })
})

export const classroomCheck = z.object({
    body: z.object({
      name: z.string({
        required_error: 'NAME IS REQUIRED !',
        invalid_type_error: 'IT MUST BE A STRING !'
    }),
    teacherId: z.string({
        required_error: 'NAME IS REQUIRED !',
        invalid_type_error: 'IT MUST BE A STRING !'
    }),

    })
})

export type studenttypeschema = TypeOf<typeof studentCheck>["body"];
export type Teacherytpeschema = TypeOf<typeof teacherCheck>["body"];
export type classroomtypeschema = TypeOf<typeof classroomCheck>["body"];


  

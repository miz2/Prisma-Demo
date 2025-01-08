import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  lastName: string,
  firstName: string
): Promise<void> {
  const res=await prisma.user.create({
    data: {
      email: username,
      password: password,
      firstname: firstName, 
      lastname: lastName,   
    },
    select:{
        id: true,
        password: true,
    }
  });
  console.log(res);  
}
// insertUser("john1@gmail.com", "password123", "Doe", "John")
//   .then(() => console.log("User john1 inserted successfully!"))
//   .catch((error) => console.error("Error inserting user john1:", error));

// insertUser("jane2@gmail.com", "password123", "Smith", "Jane")
//   .then(() => console.log("User jane2 inserted successfully!"))
//   .catch((error) => console.error("Error inserting user jane2:", error));

// insertUser("alex3@gmail.com", "password123", "Johnson", "Alex")
//   .then(() => console.log("User alex3 inserted successfully!"))
//   .catch((error) => console.error("Error inserting user alex3:", error));

// insertUser("emma4@gmail.com", "password123", "Williams", "Emma")
//   .then(() => console.log("User emma4 inserted successfully!"))
//   .catch((error) => console.error("Error inserting user emma4:", error));

// insertUser("michael5@gmail.com", "password123", "Brown", "Michael")
//   .then(() => console.log("User michael5 inserted successfully!"))
//   .catch((error) => console.error("Error inserting user michael5:", error));

interface UpdateParams{
    firstName: string;
    lastName: string;
}

async function updateUser(id: number, params: UpdateParams): Promise<void> {
  const res=await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      firstname: params.firstName,
      lastname: params.lastName,
    },
    select:{
        id: true,
        firstname: true,
        lastname: true,
        password:true
    }
  });
  console.log(res);  
}
updateUser(1, { firstName: "Rahul", lastName: "Sharma" })
  .then(() => console.log("User 1 updated successfully!"))
  .catch((error) => console.error("Error updating user 1:", error));
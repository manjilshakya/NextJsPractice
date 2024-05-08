// const prismaClientSingleton=()=>{
//     return new prismaClientSingleton()
// }

// declare global{
//     var __prisma__:undefined | ReturnType<typeof 
//     prismaClientSingleton>
// }

// const prisma=globalThis.__prisma__ ??
// prismaClientSingleton()

// export defaulty prisma
// if(process.env.NODE_ENV !== "production") globalThis.__prisma__=prisma
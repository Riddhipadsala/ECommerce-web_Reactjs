export const getpost= async ()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"GET",
  });
  return await res.json();
};

export const name = async ()=>{
  const res=await fetch("https://randomuser.me/api/",{
    method:"GET",
  });
  return await res.json();
};


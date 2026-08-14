//rafce

import Counter from "@/components/Counter"
import Image from "next/image";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");

  const data = await res.json();
  return data;
}

const aboutpage = async () => {

  //await new Promise((resolve) => setTimeout(resolve, 1000));

  //js
  const data = await fetchTodos();
  console.log("data", data);

  return (
    <div>

      <p>This is the about page.</p>

      <Counter />


      <u>
        {data.map((item: { id: number; title: string }) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </u>

      <Image
        src="https://images.pexels.com/photos/30899497/pexels-photo-30899497.jpeg"
        alt="ลิง"
        width={400}
        height={400}
      />
    </div>
  );
};
export default aboutpage
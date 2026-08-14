import Link from "next/link";

//rafce
const infoPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
        infoPage
    </div>
  );
};

export default infoPage
import { useRouter } from "next/router";

const Button = (props: { text: string; url: string }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(props.url)}
      className="focus:outline-none w-1/3 flex transition-colors duration-300 border-gray-200 hover:border-blue-500 hover:text-blue-500 border px-4 py-3 rounded-md flex justify-center space-y-3 place-self-center"
    >
      {props.text} &rarr;
    </button>
  );
};

export default Button;

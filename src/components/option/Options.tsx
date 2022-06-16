import classes from "./Options.module.css";

type PropsOptions = {
  label: string;
  counter: number;
  item: string;
  disabled: boolean;
  action: (type: string, item: string) => void;
};

const Options = (props: PropsOptions) => {
  return (
    <div className="flex justify-between w-80 m-2.5">
      <span>{props.label}</span>
      <div className="flex items-center gap-2.5">
        <button
          disabled={props.disabled}
          className="hover:bg-booking-button text-black border-booking-button border-1sm w-10 h-10 cursor-pointer disabled:cursor-not-allowed"
          onClick={() => props.action("REMOVE", props.item)}
        >
          -
        </button>
        <span>{props.counter}</span>
        <button
          className="hover:bg-booking-button text-black border-booking-button border-1sm w-10 h-10 cursor-pointer"
          onClick={() => props.action("ADD", props.item)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Options;

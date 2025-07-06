import { z } from "zod/v4";

const Player = z.object({
  username: z.string(),
  xp: z.number(),
});

const NewForm = () => {
  return <div className="text-black">h</div>;
};

export default NewForm;

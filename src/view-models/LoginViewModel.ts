import AuthSlice from "@/redux/slices/AuthSlice";
import { useAppDispatch, useAppSelector, type RootState } from "@/redux/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email({ message: "Enter valid email!" }),
  password: z.string().min(5),
});
const LoginViewModel = () => {
  const { access_token } = useAppSelector((state: RootState) => state["feature/auth"]);
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Essay Report", data);
    dispatch(AuthSlice.actions.login("login"));
  }
  return {
    access_token,
    form,
    onSubmit,
  };
};

export default LoginViewModel;

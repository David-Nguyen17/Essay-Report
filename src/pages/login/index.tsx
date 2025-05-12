import AppInput from "@/components/app-input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField } from "@/components/ui/form";
import { RouteName } from "@/routers/RouteName";
import { LoginViewModel } from "@/view-models";
import { LockKeyhole, Mail } from "lucide-react";
import { Link, Navigate } from "react-router";

const LoginPage = () => {
  const { access_token, form, onSubmit } = LoginViewModel();
  if (access_token) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-[80%] md:w-[50%] 2xl:w-[32%] mt-4">
        <h1 className="text-2xl text-gray-950 mb-4 font-bold text-center">Login</h1>
        <div className="text-base text-gray-700 mb-6 text-center font-normal">
          {"If you face any problems while logging in or need credentials, please contact the Essay Report team."}
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <FormControl>
                    <AppInput
                      label="Email"
                      isRequired
                      field={field}
                      placeholder="Enter your email"
                      formState={fieldState}
                      leftIcon={<Mail className="w-4 h-4 stroke-gray-500" />}
                    />
                  </FormControl>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field, fieldState }) => (
                  <FormControl>
                    <AppInput
                      label="Password"
                      isRequired
                      className="mt-6"
                      field={field}
                      placeholder="Enter your password"
                      formState={fieldState}
                      type="password"
                      leftIcon={<LockKeyhole className="w-4 h-4 stroke-gray-500" />}
                    />
                  </FormControl>
                )}
              />
            </div>
            <Button type="submit" className="w-full mt-6" disabled={!!form.formState?.errors?.email}>
              {"Log In"}
            </Button>
            <div className="flex items-center gap-1 justify-end mt-6 font-light mb-10">
              Don't have an account yet?{" "}
              <Link to={`/${RouteName.SIGN_UP}`} className="text-blue-dark-500 font-medium text-base">
                Create Account
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;

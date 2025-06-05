"use client";
import { TabsContent, TabsTrigger, Tabs, TabsList } from "@/components/ui/tabs";
import  SingUpForm  from "./componets/singUpForm";
import LoginForm from "./componets/loginForm";


const AuthenticationPage = () => {
  
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="login">
          <TabsList>
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Criar conta</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register">
            <SingUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthenticationPage;

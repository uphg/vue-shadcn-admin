import LoginForm from "@/components/features/login-form/login-form";

const LoginPage = defineComponent({
  name: 'LoginPage',
  setup() {
    return () => (
      <div class="flex h-screen w-full items-center justify-center px-4">
        <LoginForm />
      </div>
    );
  }
});

export default LoginPage
import { RouterLink, RouterView } from "vue-router";

const DefaultLayout = defineComponent({
  name: 'DefaultLayout',
  setup() {
    return () => (
      <div class="default-layout flex flex-col min-h-screen">
        <header class="flex items-center justify-center p-4 bg-gray-800 text-white">
          <div class="max-w-7xl w-full flex items-center justify-between px-3">
            <RouterLink to="/">
              <h1>My Application</h1>
            </RouterLink>
            <nav class="flex items-center space-x-4 lg:space-x-6 mx-6 mx-6">
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/about">About</RouterLink>
              <RouterLink to="/icon">Icon</RouterLink>
            </nav>
          </div>
        </header>
        <main class="flex-1 bg-gray-100 p-y-6">
          <div class="max-w-7xl w-full mx-auto px-3 py-6">
            <RouterView />
          </div>
        </main>
        <footer class="bg-gray-800 text-white py-4">
          <div class="max-w-7xl w-full mx-auto px-3 text-center">
            <p>&copy; 2025 My Application</p>
          </div>
        </footer>
      </div>
    );
  }
});

export default DefaultLayout;
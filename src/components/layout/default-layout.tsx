import { RouterLink, RouterView } from "vue-router";
import { useI18n } from 'vue-i18n'

const DefaultLayout = defineComponent({
  name: 'DefaultLayout',
  setup() {
    const { t } = useI18n();

    return () => (
      <div class="default-layout flex flex-col min-h-screen">
        <header class="flex items-center justify-center p-4 bg-gray-800 text-white">
          <div class="max-w-7xl w-full flex items-center justify-between px-3">
            <RouterLink to="/">
              <h1>{t('title')}</h1>
            </RouterLink>
            <nav class="flex items-center space-x-4 lg:space-x-6 mx-6">
              <RouterLink to="/">{t('button.home')}</RouterLink>
              <RouterLink to="/about">{t('button.about')}</RouterLink>
              <RouterLink to="/icon">{t('button.icon')}</RouterLink>
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
            <p>&copy; 2025 {t('title')}</p>
          </div>
        </footer>
      </div>
    );
  }
});

export default DefaultLayout;


const AboutPage = defineComponent({
  name: 'AboutPage',
  setup() {
    return () => (
      <div>
        <h1>About Page</h1>
        <p>This is the about page of our application.</p>
        <p>
          Here you can find information about the application, its features, and
          how to use it.
        </p>
      </div>
    );
  }
});

export default AboutPage;
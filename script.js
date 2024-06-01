export default defineComponent({
  async run({ steps, $ }) {
    await $.respond({
      immediate: true,
      status: 200,
      headers: { "my-custom-header": "value" },
      body: "Hello World"
    });
  },
});

const {
  plugin: { store },
  ui: { TextBox, Text },
} = shelter;

export default () => (
  <>
    <Text>Inworld API Key</Text>
    <TextBox
      placeholder="Basic auth Base64 key"
      value={store.inworldApiKey || store.openaiKey}
      onInput={(value) => {
        store.inworldApiKey = value;
        store.openaiKey = value;
      }}
    />
    <Text>Uses your Discord bio automatically when available.</Text>
  </>
);

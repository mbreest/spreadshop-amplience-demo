const ContentClient = require('dc-delivery-sdk-js').ContentClient;
const DefaultContentBody = require('dc-delivery-sdk-js').DefaultContentBody;

async function fetch() {
  const client = new ContentClient({
    hubName: 'spreadshirtdevpoc',
    locale: 'de-DE',
  });

  const slotId = '1e95ac85-9b55-4df7-aa11-a57787d9a516';
  const res = await client.getContentItemById(slotId);
  console.log(res.body);

  console.log(
    'xxx ' + res.body.hero.background.image.url().width(500).height(500).format('jpg').build()
  );

  const slotKey = 'homepage';
  const res1 = await client.getContentItemByKey(slotKey);
  console.log(JSON.stringify(res1.body, null, 2));
}

fetch();

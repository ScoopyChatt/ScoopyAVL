#!/bin/bash
set -e

# Download PocketBase
curl -fsSL https://github.com/pocketbase/pocketbase/releases/download/v0.38.0/pocketbase_0.38.0_linux_amd64.zip -o /tmp/pb.zip
unzip -o -q /tmp/pb.zip pocketbase
chmod +x pocketbase
rm /tmp/pb.zip

# Start PocketBase in background temporarily to set up collections
./pocketbase serve --http=0.0.0.0:8090 --dir=./pb_data &
PB_PID=$!
sleep 5

# Create/update superuser
./pocketbase superuser upsert brandonwesleycarter@gmail.com '052512Leighton!!!' || true

# Get auth token
TOKEN=$(curl -s -X POST http://localhost:8090/api/collections/_superusers/auth-with-password \
  -H 'Content-Type: application/json' \
  -d '{"identity":"brandonwesleycarter@gmail.com","password":"052512Leighton!!!"}' | python3 -c "import sys,json; print(json.load(sys.stdin).get('token',''))" 2>/dev/null)

# Create collections if they don't exist
create_collection() {
  NAME=$1
  BODY=$2
  curl -s -X POST http://localhost:8090/api/collections \
    -H "Authorization: $TOKEN" \
    -H 'Content-Type: application/json' \
    -d "$BODY" > /dev/null 2>&1 || true
}

create_collection "quote_requests" '{"name":"quote_requests","type":"base","fields":[{"name":"name","type":"text"},{"name":"email","type":"email"},{"name":"phone","type":"text"},{"name":"serviceZipCode","type":"text"},{"name":"serviceType","type":"text"},{"name":"numberOfDogs","type":"number"},{"name":"additionalNotes","type":"text"}],"createRule":"","listRule":"","viewRule":""}'
create_collection "leads" '{"name":"leads","type":"base","fields":[{"name":"name","type":"text"},{"name":"email","type":"email"},{"name":"phone","type":"text"},{"name":"address","type":"text"}],"createRule":"","listRule":"","viewRule":""}'
create_collection "chat_summaries" '{"name":"chat_summaries","type":"base","fields":[{"name":"userId","type":"text"},{"name":"userEmail","type":"email"},{"name":"userName","type":"text"},{"name":"messageCount","type":"number"},{"name":"sentAt","type":"text"}],"createRule":"","listRule":"","viewRule":""}'
create_collection "integrated_ai_messages" '{"name":"integrated_ai_messages","type":"base","fields":[{"name":"userId","type":"text"},{"name":"role","type":"text"},{"name":"content","type":"text"}],"createRule":"","listRule":"","viewRule":""}'
create_collection "integrated_ai_images" '{"name":"integrated_ai_images","type":"base","fields":[{"name":"userId","type":"text"}],"createRule":"","listRule":"","viewRule":""}'
create_collection "google_reviews_cache" '{"name":"google_reviews_cache","type":"base","fields":[{"name":"data","type":"text"},{"name":"cachedAt","type":"text"}],"createRule":"","listRule":"","viewRule":""}'
create_collection "checklist_signups" '{"name":"checklist_signups","type":"base","fields":[{"name":"email","type":"email"},{"name":"name","type":"text"}],"createRule":"","listRule":"","viewRule":""}'

# Kill the background PocketBase
kill $PB_PID 2>/dev/null || true
sleep 2

# Start PocketBase for real on the Railway PORT
exec ./pocketbase serve --http=0.0.0.0:$PORT --dir=./pb_data

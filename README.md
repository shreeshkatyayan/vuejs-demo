# Steps to run the application

## Before first run

1. Clone the repository
```
git clone git@github.com:shreeshkatyayan/vuejs-demo.git
```

2. Open the folder where repo is cloned
```
cd vuejs-demo
```

3. Install project dependencies via NPM
```
npm install
```

4. Create an environment file ```.env```
```
VITE_FIREBASE_API_KEY: ""
VITE_FIREBASE_AUTH_DOMAIN: ""
VITE_FIREBASE_PROJECT_ID: ""
VITE_FIREBASE_STORAGE_BUCKET: ""
VITE_FIREBASE_MESSAGING_SENDER_ID: ""
VITE_FIREBASE_APP_ID: ""
```

## Commands

1. Run local development server
```
npm run dev
```

2. Run storybook server
```
npm run storybook
```

3. Run the unit test cases
```
npm run test:unit
```

4. Run the coverage test
```
npm run test:coverage
```
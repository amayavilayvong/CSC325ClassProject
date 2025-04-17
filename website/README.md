# Material UI - Next.js App Router example in TypeScript

This is a [Next.js](https://nextjs.org/) project bootstrapped using [`create-next-app`](https://github.com/vercel/next.js/tree/HEAD/packages/create-next-app) with Material UI installed.

## How to use

Download the example [or clone the repository](https://github.com/mui/material-ui):

<!-- #default-branch-switch -->

```bash
curl https://codeload.github.com/mui/material-ui/tar.gz/v6.x | tar -xz --strip=2  material-ui-6.x/examples/material-ui-nextjs-ts
cd material-ui-nextjs-ts
```

Install it and run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

or:

<!-- #default-branch-switch -->

[![Edit on StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/mui/material-ui/tree/v6.x/examples/material-ui-nextjs-ts)

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/github/mui/material-ui/tree/v6.x/examples/material-ui-nextjs-ts)

## To Build and Test:

* Make sure you are cd into the website directory before running the following commands.
* Run them in the order you see below.

```bash
npm install
npm run build
npm install http-server
```
* The build command should generate a directory titled "out." Cd into out.
* You MUST be cd into out before running the next command, or it will not run correctly.

```bash
npx http-server
```

* You should receive a prompt to open the port where the webpage loads in a browser. Click "Open in Browser."


## To Test With Jest:

* First, make sure that jest has been downloaded and properly configured within the website directory. Cd into the website directory and run the following command:

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node
```

* This command will ensure that jest is setup and that you can use the command below to run the test script. 
* After jest is successfully installed, make sure that you are cd into the `__tests__` directory before proceeding. 
* Once this has been verified, run the following command:

```bash
npm run test
```
* The output of this command will show the tests that were successfully passed as well as any tests that were failed, along with documentation for why the test failed.

## Learn more

To learn more about this example:

- [Next.js documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Customizing Material UI](https://mui.com/material-ui/customization/how-to-customize/) - approaches to customizing Material UI.

## What's next?

<!-- #default-branch-switch -->

You now have a working example project.
You can head back to the documentation and continue by browsing the [templates](https://mui.com/material-ui/getting-started/templates/) section.

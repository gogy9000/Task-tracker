# Task-tracker

Это приложение базируется в монорепозитории. Имеет две точки входа, и одну кодовую базу написанную на react-native.
Приложение разворачивается как Next.js приложение на Vercel, так же разворачивается как мобильное приложение на серверах EAS от Expo.
Маршрутизация приложения основана на библиотеке SOLITO, которая по сути является обертокой над роутингом от Next.js и React-Navigation, что даeт адекватный роутинг как в веб варианте так и в мобильном варианте.
# Task-tracker
This application is based in a mono repository, has two entry points, and one codebase written in react-native.
The application is deployed as a Next.js application on Vercel, and similarly deployed as a mobile application on EAS servers.
The application routing is based on SOLITO library, which is essentially a wrapper over Next.js and React-Navigation routing, which gives adequate routing in both web and mobile variants.


<p>
<img height="400" src="https://github.com/gogy9000/Task-tracker/blob/update_expo/design/native/photo_2023-01-07_14-58-43.jpg" width="200" alt="design"/>
<img height="400" src="https://github.com/gogy9000/Task-tracker/blob/update_expo/design/native/photo_2023-01-07_14-58-46.jpg" width="200" alt="design"/>
<img height="400" src="https://github.com/gogy9000/Task-tracker/blob/update_expo/design/native/photo_2023-01-07_14-58-50.jpg" width="200" alt="design"/>
<img height="400" src="https://github.com/gogy9000/Task-tracker/blob/update_expo/design/native/photo_2023-01-07_14-58-55.jpg" width="200" alt="design"/>
</p>

## Technology stack
- React-native
- Expo
- Redux(RTC-query)
- Solito
- Formik
- NativeBase
- Reanimated


For a long long time the React Native community has been looking for a way to make Universal Apps a reality, and the major roadblock that was stopping us was Navigation. Solito is most probably the answer to that, and as we know NativeBase already works on all the three platforms. It’s a match made in heaven. So now your next can run with the same codebase on all the 3 platforms and we are here to show you how?

> Note: If you are looking to make your current codebase into a universal app, It’s really tricky and different for different codebases. Feel free to reach out to us on our Discord Server with such use cases, we will try to help you out as much as we can.
> 

We have already done the hard work for you and created a starter kit for you to start with.

## Getting Started

- Clone the repo: [https://github.com/GeekyAnts/nativebase-templates/tree/master/solito-universal-app-template-nativebase-typescript](https://github.com/GeekyAnts/nativebase-templates/tree/master/solito-universal-app-template-nativebase-typescript)
- Run `yarn` or `npm install` on the root directory.
- Then run `yarn` or `npm install` in apps/expo and apps/next.
- Now run `yarn` or `npm install` in packages/app.

That’s it your starter kit is ready to be used.

All your screens and components will be present in packages/app and this can be accessed in the next and expo projects.

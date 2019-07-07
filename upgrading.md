# Upgrading from version 1.x

Since v2 there is no longer a dependency on Redux, this made sense to remove given the recent improvements to the Context API and React Hooks.

To upgrade there are just a few things you need to know:

## HotTipRoot is now HotTipProvider

HotTipRoot was able to be placed at the root of the application without wrapping the application.
Because HotTipProvider uses the Context API it must now wrap your application in order to provide context.

## hotTipReducer is no more

Because we're not using redux you can remove hotTipReducer from your store setup.

## Any other issues?

If you find any other issues upgrading please open an issue tagged `v2-upgrade` and I'll update this guide.

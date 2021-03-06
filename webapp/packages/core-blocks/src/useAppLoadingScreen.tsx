import { useEffect } from 'react';

export function useAppLoadingSreen() {
  useEffect(() => {
    const appLoadingScreen = document.getElementById('app-loading-screen');
    if (!appLoadingScreen) {
      console.warn('Can"t find any node with "app-loading-screen" id');
      return;
    }

    if (appLoadingScreen.classList.contains('app-loading-screen--fade-out')) {
      console.warn('#app-loading-screen already has "app-loading-screen--fade-out" class');
      return;
    }

    const onTransitionEnd = () => {
      appLoadingScreen.style.display = 'none';
    };

    appLoadingScreen.addEventListener('transitionend', onTransitionEnd);
    appLoadingScreen.classList.add('app-loading-screen--fade-out');

    return () => appLoadingScreen.removeEventListener('transitionend', onTransitionEnd);
  }, []);
}

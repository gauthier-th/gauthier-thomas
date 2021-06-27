import { langPrefixFromUrl } from './Translations';

export default (pageOrder, location, history, wheelCount, lastPageChange, xDown, yDown) => {
	return {
		handleWheel: (e) => {
			const langPrefix = langPrefixFromUrl(location.pathname);
			if (Date.now() - lastPageChange.current < 1000)
				return;
			const delta = Math.sign(e.deltaY);
			const currentPageIndex = pageOrder.indexOf(history.location.pathname.substr(langPrefix.length));
			if ((currentPageIndex > 0 && delta < 0) || (currentPageIndex  < pageOrder.length - 1 && delta > 0))
				wheelCount.current += delta;
			if (wheelCount.current > 6) {
				wheelCount.current = 0;
				if (currentPageIndex < pageOrder.length - 1) {
					lastPageChange.current = Date.now();
					history.push(langPrefix + pageOrder[currentPageIndex + 1]);
				}
			}
			else if (wheelCount.current < -6) {
				wheelCount.current = 0;
				if (currentPageIndex > 0) {
					lastPageChange.current = Date.now();
					history.push(langPrefix + pageOrder[currentPageIndex - 1]);
				}
			}
		},
		handleTouchStart: (e) => {
			const firstTouch = (e.touches || e.originalEvent.touches)[0];
			xDown.current = firstTouch.clientX;
			yDown.current = firstTouch.clientY;
		},
		handleTouchCancel: () => {
			xDown.current = null;
			yDown.current = null;
		},
		handleTouchEnd: (e) => {
			const langPrefix = langPrefixFromUrl(location.pathname);
			if (!xDown.current || !yDown.current)
				return;
			const xUp = e.changedTouches[0].clientX;
			const yUp = e.changedTouches[0].clientY;
			const xDiff = xDown.current - xUp;
			const yDiff = yDown.current - yUp;

			if (Math.abs(xDiff) < Math.abs(yDiff)) {
				if (yDiff > 150) {
					const currentPageIndex = pageOrder.indexOf(history.location.pathname.substr(langPrefix.length));
					if (currentPageIndex < pageOrder.length - 1)
						history.push(langPrefix + pageOrder[currentPageIndex + 1]);
				}
				else if (yDiff < -150) {
					const currentPageIndex = pageOrder.indexOf(history.location.pathname.substr(langPrefix.length));
					if (currentPageIndex > 0)
						history.push(langPrefix + pageOrder[currentPageIndex - 1]);
				}
			}
			xDown.current = null;
			yDown.current = null;
		}
	}
};
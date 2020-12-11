export default (pageOrder, history, wheelCount, lastPageChange, xDown, yDown) => {
	return {
		handleWheel: (e) => {
			if (Date.now() - lastPageChange.current < 1000)
				return;
			const delta = Math.sign(e.deltaY);
			wheelCount.current += delta;
			if (wheelCount.current > 6) {
				wheelCount.current = 0;
				const currentPageIndex = pageOrder.indexOf(history.location.pathname);
				if (currentPageIndex < pageOrder.length - 1) {
					lastPageChange.current = Date.now();
					history.push(pageOrder[currentPageIndex + 1]);
				}
			}
			else if (wheelCount.current < -6) {
				wheelCount.current = 0;
				const currentPageIndex = pageOrder.indexOf(history.location.pathname);
				if (currentPageIndex > 0) {
					lastPageChange.current = Date.now();
					history.push(pageOrder[currentPageIndex - 1]);
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
			if (!xDown.current || !yDown.current)
				return;
			const xUp = e.changedTouches[0].clientX;
			const yUp = e.changedTouches[0].clientY;
			const xDiff = xDown.current - xUp;
			const yDiff = yDown.current - yUp;

			if (Math.abs(xDiff) < Math.abs(yDiff)) {
				if (yDiff > 150) {
					const currentPageIndex = pageOrder.indexOf(history.location.pathname);
					if (currentPageIndex < pageOrder.length - 1)
						history.push(pageOrder[currentPageIndex + 1]);
				}
				else if (yDiff < -150) {
					const currentPageIndex = pageOrder.indexOf(history.location.pathname);
					if (currentPageIndex > 0)
						history.push(pageOrder[currentPageIndex - 1]);
				}
			}
			xDown.current = null;
			yDown.current = null;
		}
	}
};
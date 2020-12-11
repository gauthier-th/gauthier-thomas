export default (pageOrder, history, wheelCount, lastPageChange) => {
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
		}
	}
};
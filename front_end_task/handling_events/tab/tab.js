'use strict';
function asTabs(node) {
	let tabs = Array.from(node.children).map((node) => {
		let button = document.createElement('button');
		button.textContent = node.getAttribute('data-tabname');
		let tab = { node, button };
		button.addEventListener('click', () => currentTab(tab));
		return tab;
	});

	let tabList = document.createElement('div');
	for (let { button } of tabs) tabList.appendChild(button);
	node.insertBefore(tabList, node.firstChild);

	function currentTab(selectedTab) {
		for (let tab of tabs) {
			let selected = tab === selectedTab;
			if (selected) {
				tab.button.classList.add('selected');
				tab.node.classList.remove('d-none');
			} else {
				tab.button.classList.remove('selected');
				tab.node.classList.add('d-none');
			}
		}
	}
	currentTab(tabs[0]);
}
asTabs(document.querySelector('tab-panel'));

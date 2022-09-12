import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
  page: 1,
  template: {
	page: '<a href="#" class="tui-page-btn" style="background-color:#fff" >{{page}}</a>',
	currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
	moveButton:
	  '<a href="#" class="tui-page-btn tui-{{type}}" style="background-color:#fff">' +
		 '<span class="tui-ico-{{type}}">{{type}}</span>' +
	  '</a>',
	disabledMoveButton:
	  '<span class="tui-page-btn tui-is-disabled tui-{{type}}" style="background-color:#fff">' +
		 '<span class="tui-ico-{{type}}">{{type}}</span>' +
	  '</span>',
	moreButton:
	  '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip" style="background-color:#fff">' +
		 '<span class="tui-ico-ellip">...</span>' +
	  '</a>'
 }
};
const paganation = new Pagination(
  document.getElementById('pagination'),
  options
);

export { paganation };
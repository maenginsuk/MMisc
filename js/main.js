$(function(){
    $('#fullpage').fullpage({
		//options here
		autoScrolling: true,
		anchors:['home', 'services', 'about','works','contacts'],
		sectionsColor : ['#666', '#b24a50','#665464','#81a256','#75b4aa'],
		//navigation: true,
		//navigationPosition: 'right',
		slidesNavigation: true,		
	});

	// isotope
	var $photo = $('.workGNB ul'),
		$all=$photo.find('#all'),
		$Photo01=$photo.find('#photo01'),
		$Photo02=$photo.find('#photo02'),
		$Photo03=$photo.find('#photo03'),
		$grid=$('.workWrap .workGrid');

		$grid.isotope({
			itemSelector: '.photo',
            // masonry: { columnWidth: 200 }
		});

		$all.click(function () { $grid.isotope({ filter: '.photo' });});
		$Photo01.click(function () { $grid.isotope({ filter: '.photo1' });});
		$Photo02.click(function () { $grid.isotope({ filter: '.photo2' });});
		$Photo03.click(function () { $grid.isotope({ filter: '.photo3' });});
	

})// jquery 문서가 준비되면
$(function () {
	
	// show a preview if any carousel-indicators(hover) */
	$("#team ol.carousel-indicators").find('li').on('mouseenter', function() {
		let FetchName = $(".carousel-inner").find(".team .avatarName").toArray()[$(this).attr('data-slide-to')];
		$(".previewName p").hide()
		setTimeout(() => {
			$(".previewName p").text($(FetchName).text())
			$(".previewName p").show("slow")
		}, 200);
	})
	// hide preview on mouse leave
	$("#team ol.carousel-indicators").find('li').on('mouseout', function() {
		$(".previewName p").hide(450);
	})

	/* sidebar item highlighting on active */
	$(".sideBar ul").find('li').on('click', function () {
		$(".sideBar ul").find('li').removeClass("activeMenu")
		$(this).addClass("activeMenu")
	})

	// navigation bar code
	let nav = $(".navigate.littleNav");
	let overlay = $(".navOverlay")

	// if side navigation is opening : if touching out of the side .. it'll close immediately
	$(window).on('click', (e) => {
		if (nav.hasClass("showNav")) {
			if (e.target != document.querySelector(".navigate")) {
				nav.toggleClass("showNav");
				overlay.toggleClass("navOverlayB");
				$(".nav-toggle").toggleClass('close-nav');
			}
		}
	})

	// close the side navigation automatically if one link is clicked
	nav.find('a').on('click', () => {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass("showNav");
		overlay.toggleClass("navOverlayB");
	});
	
	// some mastering : if window is resized but side navigation is still on => don't show the navbar
	// switch big navigation to side navigation on window resize
	$(window).on('resize', () => {
		if (screen.width >= 1024) {
			if (!nav.hasClass("showNav")) {
				$(".bigNav").show()
				$(".nav-toggle").hide()
			} else {
				$(".bigNav").hide()
				$(".nav-toggle").show();
			}
		}
	})

	// open side navigation if the menu icon is clicked
	$('.nav-toggle').on('click', () => {
		$(this).toggleClass('close-nav');
		nav.toggleClass('showNav');
		overlay.toggleClass("navOverlayB");
		return false;
	});	


	// "concours" displaying
	$(".navConcours").on('click', function() {
		$("#H-concours").toggleClass("activeConcours")
		return false;
	})
	$(".concoursDismiss").on('click', function() {
		$("#H-concours").toggleClass("activeConcours")
	})
})

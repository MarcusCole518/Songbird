import React from 'react';

const Landing = () => (
	<section className="landing">
		<h1 className="hero-title">Turn the music up!</h1>
		<img src="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="main-image" alt="girl_listening_to_music" />
		<hr className="rule"/>
		<section className="selling-points">
			<div className="point">
				<h2 className="point-title">Choose your music</h2>
				<p className="point-description">The world is full of music; why should you have to listen <br /> to music that someone else chose?</p>
			</div>
			<div className="point1">
				<h2 className="point-title">Unlimited, streaming, ad-free</h2>
				<p className="point-description">No arbitrary limits. No distractions.</p>
				<img src="https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="black_vinyl_record" className="vinyl" />
			</div>
			<div className="point2">
				<h2 className="point-title">Mobile enabled</h2>
				<p className="point-description">Listen to your music on the go.</p>
				<img src="https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="crowd_at_concert" className="concert" />
			</div>
		</section>
	</section>
);
export default Landing;
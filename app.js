// Connect to the APIs and make it happen :)

// Display a list of major US military actions since 1776 (static data)
function getUSMilitaryActions() {
	const output = document.getElementById('us-military-actions-output');
	output.innerHTML = 'Loading...';
	// Major US military actions (abbreviated list for demo)
	const actions = [
		{ name: 'American Revolutionary War', years: '1775–1783' },
		{ name: 'Quasi-War with France', years: '1798–1800' },
		{ name: 'First Barbary War', years: '1801–1805' },
		{ name: 'War of 1812', years: '1812–1815' },
		{ name: 'Second Barbary War', years: '1815' },
		{ name: 'Mexican–American War', years: '1846–1848' },
		{ name: 'American Civil War', years: '1861–1865' },
		{ name: 'Spanish–American War', years: '1898' },
		{ name: 'Philippine–American War', years: '1899–1902' },
		{ name: 'World War I', years: '1917–1918' },
		{ name: 'World War II', years: '1941–1945' },
		{ name: 'Korean War', years: '1950–1953' },
		{ name: 'Vietnam War', years: '1965–1973' },
		{ name: 'Invasion of Grenada', years: '1983' },
		{ name: 'Invasion of Panama', years: '1989' },
		{ name: 'Gulf War', years: '1990–1991' },
		{ name: 'Somalia Intervention', years: '1992–1995' },
		{ name: 'Bosnian War', years: '1995' },
		{ name: 'Kosovo War', years: '1999' },
		{ name: 'War in Afghanistan', years: '2001–2021' },
		{ name: 'Iraq War', years: '2003–2011' },
		{ name: 'Intervention in Libya', years: '2011' },
		{ name: 'Intervention against ISIS', years: '2014–present' },
		{ name: 'Latest Iran Interaction', years: '2026–present', note: 'Peace be in our interests.' },
		{ name: 'Other minor actions', years: '1776–present' }
	];
	output.innerHTML = actions.map(a =>
		`<div><strong>${a.name}</strong> <span style=\"color:#888;\">(${a.years})</span>${a.note ? `<br><span style='color:#2a7;'>${a.note}</span>` : ''}</div>`
	).join('<hr>');
}


// Display recent company valuations (static example data)
function getCompanyValuations() {
	const output = document.getElementById('valuation-output');
	output.innerHTML = 'Loading...';
	// Example static data (replace with real API if available)
	const valuations = [
		{ name: 'OpenAI', value: '$80B', date: '2024-03-01' },
		{ name: 'Stripe', value: '$50B', date: '2024-02-15' },
		{ name: 'Google', value: '$3.63T', date: '2024-04-07' },
		{ name: 'Databricks', value: '$43B', date: '2024-02-01' },
		{ name: 'ByteDance', value: '$225B', date: '2024-01-10' }
	];
	output.innerHTML = valuations.map(v =>
		`<div><strong>${v.name}</strong><br>Valuation: ${v.value}<br>Date: ${v.date}</div>`
	).join('<hr>');
}


// Display a random welder in action image from Unsplash
function getWelderAction() {
	const output = document.getElementById('welder-action-output');
	output.innerHTML = 'Loading...';
	// Unsplash random image endpoint for "welder" (use a direct Unsplash image for reliability)
	const imgUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80';
	output.innerHTML = `<img src="${imgUrl}" alt="Random welder in action" style="width:200px;border-radius:8px;box-shadow:0 0 10px #333;" /><br><em>Welder in action (Unsplash)</em>`;
}


// Fetch and display a random welder (using randomuser.me as a placeholder)
function getWelder() {
	const output = document.getElementById('welder-output');
	output.innerHTML = 'Loading...';
	fetch('https://randomuser.me/api/?nat=us')
		.then(response => response.json())
		.then(data => {
			if (data && data.results && data.results.length > 0) {
				const user = data.results[0];
				output.innerHTML = `
					<img src="${user.picture.large}" alt="Welder" style="width:80px;border-radius:50%;" /><br>
					<strong>${user.name.first} ${user.name.last}</strong><br>
					<em>Welder</em><br>
					Location: ${user.location.city}, ${user.location.state}<br>
					Email: ${user.email}
				`;
			} else {
				output.innerHTML = 'No welder found.';
			}
		})
		.catch(error => {
			output.innerHTML = 'Failed to fetch welder.';
		});
}


// Fetch and display a random public API info
function getPublicApiInfo() {
	const output = document.getElementById('publicapi-output');
	output.innerHTML = 'Loading...';

	// publicapis.org is defunct. Using a curated local list from github.com/public-apis/public-apis
	const apis = [
		{ API: 'Chuck Norris Facts', Description: 'Hand curated Chuck Norris jokes as JSON', Link: 'https://api.chucknorris.io', Category: 'Entertainment' },
		{ API: 'Open Brewery DB', Description: 'Breweries, cideries and craft beer bottle shops', Link: 'https://www.openbrewerydb.org', Category: 'Food & Drink' },
		{ API: 'Dog Facts', Description: 'Random facts about dogs', Link: 'https://kinduff.github.io/dog-api/', Category: 'Animals' },
		{ API: 'Random Dog', Description: 'Random pictures of dogs', Link: 'https://random.dog/woof.json', Category: 'Animals' },
		{ API: 'Open Food Facts', Description: 'Food products database', Link: 'https://world.openfoodfacts.org/data', Category: 'Food & Drink' },
		{ API: 'JokeAPI', Description: 'Programming, miscellaneous and dark jokes', Link: 'https://sv443.net/jokeapi/v2/', Category: 'Games & Comics' },
		{ API: 'Jikan', Description: 'Unofficial MyAnimeList API', Link: 'https://jikan.moe', Category: 'Anime' },
		{ API: 'CoinCap', Description: 'Real time cryptocurrency prices', Link: 'https://docs.coincap.io/', Category: 'Cryptocurrency' },
		{ API: 'Frankfurter', Description: 'Exchange rates, currency conversion and time series', Link: 'https://www.frankfurter.app/docs', Category: 'Currency Exchange' },
		{ API: 'FreeToGame', Description: 'Free-to-play games database', Link: 'https://www.freetogame.com/api-doc', Category: 'Games & Comics' },
		{ API: 'Art Institute of Chicago', Description: 'Art collection and metadata', Link: 'https://api.artic.edu/docs/', Category: 'Art & Design' },
		{ API: 'Genshin Impact', Description: 'Genshin Impact game data', Link: 'https://genshin.dev', Category: 'Games & Comics' },
		{ API: 'PoetryDB', Description: 'Instant data from a vast poetry collection', Link: 'https://poetrydb.org', Category: 'Books' },
		{ API: 'Random Useless Facts', Description: 'Random useless but true facts', Link: 'https://uselessfacts.jsph.pl/', Category: 'Entertainment' },
		{ API: 'Wiktionary', Description: 'Collaborative dictionary data', Link: 'https://en.wiktionary.org/w/api.php', Category: 'Dictionaries' },
		{ API: 'Open Meteo', Description: 'Free weather API with no key required', Link: 'https://open-meteo.com/', Category: 'Weather' },
		{ API: 'Dog CEO', Description: 'Random dog images by breed', Link: 'https://dog.ceo/dog-api/', Category: 'Animals' },
		{ API: 'RandomUser', Description: 'Generate random user data', Link: 'https://randomuser.me/', Category: 'Test Data' },
		{ API: 'Bored API', Description: 'Suggests random activities to fight boredom', Link: 'https://www.boredapi.com/', Category: 'Development' },
		{ API: 'IP-API', Description: 'IP geolocation and proxy detection', Link: 'https://ip-api.com/', Category: 'Geocoding' }
	];

	setTimeout(() => {
		const entry = apis[Math.floor(Math.random() * apis.length)];
		output.innerHTML = `
			<strong>${entry.API}</strong><br>
			<em>${entry.Description}</em><br>
			<a href="${entry.Link}" target="_blank">Visit API</a><br>
			Category: ${entry.Category}
		`;
	}, 300);
}

// Fetch and display a random joke
function getJoke() {
	const output = document.getElementById('joke-output');
	output.innerHTML = 'Loading...';
	fetch('https://official-joke-api.appspot.com/random_joke')
		.then(response => response.json())
		.then(data => {
			if (data && data.setup && data.punchline) {
				output.innerHTML = `<strong>${data.setup}</strong><br>${data.punchline}`;
			} else {
				output.innerHTML = 'No joke found.';
			}
		})
		.catch(error => {
			output.innerHTML = 'Failed to fetch joke.';
		});
}


// Fetch and display GitHub user info
function getGitHubUser() {
	const output = document.getElementById('github-output');
	output.innerHTML = 'Loading...';
	const input = document.getElementById('github-username');
	const username = input && input.value ? input.value.trim() : '';
	if (!username) {
		output.innerHTML = 'Please enter a GitHub username.';
		return;
	}
	fetch(`https://api.github.com/users/${username}`)
		.then(response => response.json())
		.then(data => {
			if (data && data.login) {
				output.innerHTML = `
					<img src="${data.avatar_url}" alt="Avatar" style="width:80px;border-radius:50%;" /><br>
					<strong>${data.login}</strong><br>
					Name: ${data.name || 'N/A'}<br>
					Public Repos: ${data.public_repos}<br>
					Followers: ${data.followers}<br>
					<a href="${data.html_url}" target="_blank">View Profile</a>
				`;
			} else {
				output.innerHTML = 'User not found.';
			}
		})
		.catch(error => {
			output.innerHTML = 'Failed to fetch user info.';
		});
}

// Fetch and display trending movies (using TMDB demo API)
function getMovies() {
  const output = document.getElementById('movies-output');
  output.innerHTML = 'Loading...';
  // TMDB demo endpoint (replace 'YOUR_API_KEY' with a real key for more results)
  fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=3b418748ef70746869cab1f4198219b0')
    .then(response => response.json())
    .then(data => {
      if (data && data.results && data.results.length > 0) {
        output.innerHTML = data.results.slice(0, 5).map(movie =>
          `<div><strong>${movie.title}</strong> (${movie.release_date})<br>Rating: ${movie.vote_average}</div>`
        ).join('<hr>');
      } else {
        output.innerHTML = 'No trending movies found.';
      }
    })
    .catch(error => {
      output.innerHTML = 'Failed to fetch movies.';
    });
}

// Fetch and display currency exchange rates (USD, EUR, MYR, JPY, CNY, GBP)
function getExchangeRates() {
	const output = document.getElementById('currency-output');
	output.innerHTML = 'Loading...';
	// Using ExchangeRate-API (free, no key required for demo)
	fetch('https://api.exchangerate-api.com/v4/latest/USD')
		.then(response => response.json())
		.then(data => {
			if (data && data.rates) {
				output.innerHTML = `
					<strong>Base: USD</strong><br>
					EUR: ${data.rates.EUR}<br>
					MYR: ${data.rates.MYR}<br>
					JPY: ${data.rates.JPY}<br>
					CNY: ${data.rates.CNY}<br>
					GBP: ${data.rates.GBP}<br>
				`;
			} else {
				output.innerHTML = 'Exchange rate data not available.';
			}
		})
		.catch(error => {
			output.innerHTML = 'Failed to fetch exchange rates.';
		});
}


// Fetch and display a random dog image
function getDogImage() {
	const output = document.getElementById('dog-output');
	output.innerHTML = 'Loading...';
	fetch('https://dog.ceo/api/breeds/image/random')
		.then(response => response.json())
		.then(data => {
			output.innerHTML = `<img src="${data.message}" alt="Random Dog" style="max-width:100%;height:auto;border-radius:8px;" />`;
		})
		.catch(error => {
			output.innerHTML = 'Failed to fetch dog image.';
		});
}

// Fetch and display a random cat image
function getCatImage() {
	const output = document.getElementById('cat-output');
	output.innerHTML = 'Loading...';
	fetch('https://api.thecatapi.com/v1/images/search')
		.then(response => response.json())
		.then(data => {
			output.innerHTML = `<img src="${data[0].url}" alt="Random Cat" style="max-width:100%;height:auto;border-radius:8px;" />`;
		})
		.catch(error => {
			output.innerHTML = 'Failed to fetch cat image.';
		});
}

// Fetch and display weather info for selected cities
function getWeather() {
	const output = document.getElementById('weather-output');
	output.innerHTML = 'Loading...';
	// City data: name, latitude, longitude
	const cities = [
		{ name: 'London, UK', lat: 51.5074, lon: -0.1278 },
		{ name: 'Santa Monica, USA', lat: 34.0195, lon: -118.4912 },
		{ name: 'Houston, USA', lat: 29.7604, lon: -95.3698 },
		{ name: 'Kuala Lumpur, Malaysia', lat: 3.139, lon: 101.6869 },
		{ name: 'Springfield, MA, USA', lat: 42.1015, lon: -72.5898 }
	];
	let resultsArr = new Array(cities.length);
	let completed = 0;
	cities.forEach((city, idx) => {
		const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`;
		fetch(url)
			.then(response => response.json())
			.then(data => {
				if (data.current_weather) {
					const weather = data.current_weather;
					resultsArr[idx] = `<div style='margin-bottom:1em;'><strong>${city.name}</strong><br>Temperature: ${weather.temperature}&deg;C<br>Wind: ${weather.windspeed} km/h<br>Weather Code: ${weather.weathercode}</div>`;
				} else {
					resultsArr[idx] = `<div><strong>${city.name}</strong><br>Weather data not available.</div>`;
				}
			})
			.catch(error => {
				resultsArr[idx] = `<div><strong>${city.name}</strong><br>Failed to fetch weather data.</div>`;
			})
			.finally(() => {
				completed++;
				if (completed === cities.length) {
					output.innerHTML = resultsArr.join('<hr>');
				}
			});
	});
}
# [1st Canadian Division HQ](http://1stcdndiv.com)

A Web GIS Platform created for Canadian NEO & DART operations.

## Aim

* Open source and Unclassified platform
* Creating a mapping platform with a common look and feel

## Quickstart

### Install requirements

You must first install the required Python module.

1. **Flask** - Will be your lightweight Python webserver

2. **Geocoder** - A pure python Geocoding module.

To install these modules, we will be using Pip as our Python install manager.

Don't have Pip installed? Check out [How to Install Pip?](http://pip.readthedocs.org/en/latest/installing.html)

```bash
$ pip install flask geocoder
```

### Run Server

If you have not done it yet, you must first  **Clone in Desktop** or **Download ZIP** the `Webmap` repository.

Navigate with you command prompt using the `cd` command to your repository, the default windows directory should be found here:

```bash
$ cd documents/github/webmap
```

To run the webserver, simply go in your command prompt and run the Flask application.

```bash
$ python runserver.py
```

Then go to your web browser to `http://127.0.0.1:5000/` and you will be able to see your Web map application.

![Web Map Example](https://raw.githubusercontent.com/mce-scarto/webmap/master/webmap/static/images/example_map.jpg)



## The Basics to Learn

* [Flask](http://flask.pocoo.org/)
* [CartoCSS](https://www.mapbox.com/tilemill/docs/manual/carto/)
* [MongoDB - Database](http://mongolab.com/)
* [CartoDB](http://cartodb.com/develop)
* [jQuery](http://jquery.com/)
* [Amazon AWS](https://aws.amazon.com/marketplace/pp/B007Z5YWX4)

## TO DO List

- [ ] Basemap Imagery
- [ ] Basemap Vector
- [ ] Login Page
- [ ] Right-click MGRS Grid
- [ ] Event tracker
- [ ] Map switcher
- [ ] Custom Geocoder
- [ ] Expandable Tools extensions
- [ ] Minimize Event Tracker
- [ ] Measuring Ruler tool
- [ ] Loading GeoJSON features

## Authors

**Eimantas Barkus**

**Tyler Sedore**

**Denis Carriere**

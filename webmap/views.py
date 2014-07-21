#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import render_template, jsonify
from webmap import app
import geocoder


@app.route('/')
def index():
    name = 'Barkus'
    return render_template('map.html', name=name)

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/geocode/<location>', methods=['POST','GET'])
def geocode(location):
    g = geocoder.google(location)
    resp = jsonify(g.json)
    resp.status_code = 200
    resp.mimetype = 'application/json; charset=UTF-8'
    return resp
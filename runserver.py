#!/usr/bin/env python
# -*- coding: utf-8 -*-

from webmap import app
import sys

if sys.argv[-1] == 'publish':
    app.run(host='0.0.0.0', port=80)
else:
    app.run(debug=True)
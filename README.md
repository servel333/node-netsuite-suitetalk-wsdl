
## Quick start

```
make compile
```
* output in `.build/wsdl_v*`

## Contributing

* Download the WSDL zip file https://www.netsuite.com/portal/developers/resources/suitetalk-documentation.shtml
* Put in `wsdls/WSDL_v2020_1_0.zip`
* Edit `Makefile` to add this version
```
VERSIONS = \
  2020_1_0 \
  2019_1_0 \
  ...
```
* Run `make test`
* Commit and open a PR.

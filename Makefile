
PACKAGE_VERSION = 2.0.0

VERSIONS = \
	2019_1_0 \
	2018_2_0 \
	2018_1_0 \
	2017_2_0 \
	2017_1_0 \
	2016_2_0 \
	2016_1_0 \
	2015_2_0 \
	2015_1_0 \
	2014_2_0 \
	2014_1_0 \
	2013_2_0 \
	2013_1_0 \
	2012_2_0 \
	2012_1_0 \
	2011_2_0 \
	2011_1_0 \
	2010_2_0 \
	2010_1_0

default: compile

.build/wsdl_v%: wsdls/WSDL_v%.zip
	mkdir -p "$@/wsdl"
	unzip -n "$<" -d "$@/wsdl"
	bin/compile-handlebars.js --package-version $(PACKAGE_VERSION) "$(*)" "src/package.json.handlebars" "$@/package.json"
	bin/compile-handlebars.js "$(*)" "src/index.js.handlebars" "$@/index.js"
	bin/compile-handlebars.js "$(*)" "src/README.md.handlebars" "$@/README.md"

publish-%:
	( cd ".build/wsdl_v$(*)" || break ; npm publish )

compile: $(addprefix .build/wsdl_v,$(VERSIONS))
publish: $(addprefix publish-,$(VERSIONS))

test:
	mkdir -p .build/wsdl_v0000_0_0/wsdl
	touch .build/wsdl_v0000_0_0/wsdl/netsuite.wsdl
	bin/compile-handlebars.js "0000_0_0" "src/index.js.handlebars" ".build/wsdl_v0000_0_0/index.js"
	mocha tests/*

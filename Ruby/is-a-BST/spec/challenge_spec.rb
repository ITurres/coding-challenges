require "base64"


encoded_data = "cmVxdWlyZSAnLi9jaGFsbGVuZ2UucmInCgpSU3BlYy5kZXNjcmliZSAnVW5p
dFRlc3RzJyBkbwoKICBpdCAnZmlyc3RfdHJlZV9vZl9zZXZlbl9ub2Rlcycg
ZG8KICAgICMgRmFpbHVyZSBtZXNzYWdlOiAKICAgICMgTWV0aG9kIGNhbGxl
ZDogc2VhcmNoX3RyZWU/KFsyMCwgMTAsIDI3LCAxMiwgMTQsIDIzLCAzMF0p
CiAgICB0cmVlID0gWzIwLCAxMCwgMjcsIDEyLCAxNCwgMjMsIDMwXQogICAg
ZXhwZWN0KHNlYXJjaF90cmVlPyh0cmVlKSkudG8gYmUgZmFsc2UKICBlbmQK
ICAKICBpdCAnc2Vjb25kX3RyZWVfb2Zfc2V2ZW5fbm9kZXMnIGRvCiAgICAj
IEZhaWx1cmUgbWVzc2FnZTogCiAgICAjIE1ldGhvZCBjYWxsZWQ6IHNlYXJj
aF90cmVlPyhbMTksIDksIDI2LCA0LCAxMywgMTcsIDI5XSkKICAgIHRyZWUg
PSBbMTksIDksIDI2LCA0LCAxMywgMTcsIDI5XQogICAgZXhwZWN0KHNlYXJj
aF90cmVlPyh0cmVlKSkudG8gYmUgZmFsc2UKICBlbmQKICAKICBpdCAndGhp
cmRfdHJlZV9vZl9zZXZlbl9ub2RlcycgZG8KICAgICMgRmFpbHVyZSBtZXNz
YWdlOiAKICAgICMgTWV0aG9kIGNhbGxlZDogc2VhcmNoX3RyZWU/KFsyMCwg
MTAsIDI3LCA1LCAxNCwgMjMsIDMwXSkKICAgIHRyZWUgPSBbMjAsIDEwLCAy
NywgNSwgMTQsIDIzLCAzMF0KICAgIGV4cGVjdChzZWFyY2hfdHJlZT8odHJl
ZSkpLnRvIGJlIHRydWUKICBlbmQKICAKICBpdCAnZmlyc3RfdHJlZV9vZl9m
aWZ0ZWVuX25vZGVzJyBkbwogICAgIyBGYWlsdXJlIG1lc3NhZ2U6IAogICAg
IyBNZXRob2QgY2FsbGVkOiBzZWFyY2hfdHJlZT8oWzIwLCAxMCwgMjcsIDUs
IDE0LCAyMywgMzAsIDAsIDEyLCAwLCAwLCAwLCAwLCAwLCAwXSkKICAgIHRy
ZWUgPSBbMjAsIDEwLCAyNywgNSwgMTQsIDIzLCAzMCwgMCwgMTIsIDAsIDAs
IDAsIDAsIDAsIDBdCiAgICBleHBlY3Qoc2VhcmNoX3RyZWU/KHRyZWUpKS50
byBiZSBmYWxzZQogIGVuZAogIAogIGl0ICdzZWNvbmRfdHJlZV9vZl9maWZ0
ZWVuX25vZGVzJyBkbwogICAgIyBGYWlsdXJlIG1lc3NhZ2U6IAogICAgIyBN
ZXRob2QgY2FsbGVkOiBzZWFyY2hfdHJlZT8oWzIxLCAxMSwgMjYsIDUsIDE0
LCAyMywgMzAsIDIsIDgsIDEzLCAxNiwgMCwgMCwgMCwgMF0pCiAgICB0cmVl
ID0gWzIxLCAxMSwgMjYsIDUsIDE0LCAyMywgMzAsIDIsIDgsIDEzLCAxNiwg
MCwgMCwgMCwgMF0KICAgIGV4cGVjdChzZWFyY2hfdHJlZT8odHJlZSkpLnRv
IGJlIHRydWUKICBlbmQKIAplbmQK
"

data = Base64.decode64(encoded_data)

eval(data)

# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: requests/valuation/valuation_request.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from models.security import security_pb2 as models_dot_security_dot_security__pb2
from models.position import position_pb2 as models_dot_position_dot_position__pb2
from models.price import price_pb2 as models_dot_price_dot_price__pb2
from requests.util import operation_pb2 as requests_dot_util_dot_operation__pb2
from models.position import measure_pb2 as models_dot_position_dot_measure__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n*requests/valuation/valuation_request.proto\x12\tvaluation\x1a\x1emodels/security/security.proto\x1a\x1emodels/position/position.proto\x1a\x18models/price/price.proto\x1a\x1drequests/util/operation.proto\x1a\x1dmodels/position/measure.proto\"\xab\x02\n\x15ValuationRequestProto\x12\x14\n\x0cobject_class\x18\x01 \x01(\t\x12\x0f\n\x07version\x18\x02 \x01(\t\x12\x37\n\x0eoperation_type\x18\n \x01(\x0e\x32\x1f.util.RequestOperationTypeProto\x12(\n\x08measures\x18\x1e \x03(\x0e\x32\x16.position.MeasureProto\x12/\n\x0esecurity_input\x18\x14 \x01(\x0b\x32\x17.security.SecurityProto\x12/\n\x0eposition_input\x18\x15 \x01(\x0b\x32\x17.position.PositionProto\x12&\n\x0bprice_input\x18\x16 \x01(\x0b\x32\x11.price.PriceProtoB*\n\x0e\x63ommon.requestB\x16ValuationRequestProtosP\x01\x62\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'requests.valuation.valuation_request_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\016common.requestB\026ValuationRequestProtosP\001'
  _VALUATIONREQUESTPROTO._serialized_start=210
  _VALUATIONREQUESTPROTO._serialized_end=509
# @@protoc_insertion_point(module_scope)

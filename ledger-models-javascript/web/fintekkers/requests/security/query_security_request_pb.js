// source: fintekkers/requests/security/query_security_request.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var fintekkers_models_util_uuid_pb = require('../../../fintekkers/models/util/uuid_pb.js');
goog.object.extend(proto, fintekkers_models_util_uuid_pb);
var fintekkers_models_util_local_timestamp_pb = require('../../../fintekkers/models/util/local_timestamp_pb.js');
goog.object.extend(proto, fintekkers_models_util_local_timestamp_pb);
var fintekkers_models_position_position_filter_pb = require('../../../fintekkers/models/position/position_filter_pb.js');
goog.object.extend(proto, fintekkers_models_position_position_filter_pb);
goog.exportSymbol('proto.fintekkers.requests.security.QuerySecurityRequestProto', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.fintekkers.requests.security.QuerySecurityRequestProto.repeatedFields_, null);
};
goog.inherits(proto.fintekkers.requests.security.QuerySecurityRequestProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.fintekkers.requests.security.QuerySecurityRequestProto.displayName = 'proto.fintekkers.requests.security.QuerySecurityRequestProto';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.repeatedFields_ = [21];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.prototype.toObject = function(opt_includeInstance) {
  return proto.fintekkers.requests.security.QuerySecurityRequestProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.fintekkers.requests.security.QuerySecurityRequestProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectClass: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uuidsList: jspb.Message.toObjectList(msg.getUuidsList(),
    fintekkers_models_util_uuid_pb.UUIDProto.toObject, includeInstance),
    searchSecurityInput: (f = msg.getSearchSecurityInput()) && fintekkers_models_position_position_filter_pb.PositionFilterProto.toObject(includeInstance, f),
    asOf: (f = msg.getAsOf()) && fintekkers_models_util_local_timestamp_pb.LocalTimestampProto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.fintekkers.requests.security.QuerySecurityRequestProto}
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.fintekkers.requests.security.QuerySecurityRequestProto;
  return proto.fintekkers.requests.security.QuerySecurityRequestProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.fintekkers.requests.security.QuerySecurityRequestProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.fintekkers.requests.security.QuerySecurityRequestProto}
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectClass(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 21:
      var value = new fintekkers_models_util_uuid_pb.UUIDProto;
      reader.readMessage(value,fintekkers_models_util_uuid_pb.UUIDProto.deserializeBinaryFromReader);
      msg.addUuids(value);
      break;
    case 22:
      var value = new fintekkers_models_position_position_filter_pb.PositionFilterProto;
      reader.readMessage(value,fintekkers_models_position_position_filter_pb.PositionFilterProto.deserializeBinaryFromReader);
      msg.setSearchSecurityInput(value);
      break;
    case 23:
      var value = new fintekkers_models_util_local_timestamp_pb.LocalTimestampProto;
      reader.readMessage(value,fintekkers_models_util_local_timestamp_pb.LocalTimestampProto.deserializeBinaryFromReader);
      msg.setAsOf(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.fintekkers.requests.security.QuerySecurityRequestProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.fintekkers.requests.security.QuerySecurityRequestProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectClass();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUuidsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      21,
      f,
      fintekkers_models_util_uuid_pb.UUIDProto.serializeBinaryToWriter
    );
  }
  f = message.getSearchSecurityInput();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      fintekkers_models_position_position_filter_pb.PositionFilterProto.serializeBinaryToWriter
    );
  }
  f = message.getAsOf();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      fintekkers_models_util_local_timestamp_pb.LocalTimestampProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional string object_class = 1;
 * @return {string}
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.prototype.getObjectClass = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.fintekkers.requests.security.QuerySecurityRequestProto} returns this
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.prototype.setObjectClass = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.fintekkers.requests.security.QuerySecurityRequestProto} returns this
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated fintekkers.models.util.UUIDProto uuids = 21;
 * @return {!Array<!proto.fintekkers.models.util.UUIDProto>}
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.prototype.getUuidsList = function() {
  return /** @type{!Array<!proto.fintekkers.models.util.UUIDProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, fintekkers_models_util_uuid_pb.UUIDProto, 21));
};


/**
 * @param {!Array<!proto.fintekkers.models.util.UUIDProto>} value
 * @return {!proto.fintekkers.requests.security.QuerySecurityRequestProto} returns this
*/
proto.fintekkers.requests.security.QuerySecurityRequestProto.prototype.setUuidsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 21, value);
};


/**
 * @param {!proto.fintekkers.models.util.UUIDProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.fintekkers.models.util.UUIDProto}
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.prototype.addUuids = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 21, opt_value, proto.fintekkers.models.util.UUIDProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.fintekkers.requests.security.QuerySecurityRequestProto} returns this
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.prototype.clearUuidsList = function() {
  return this.setUuidsList([]);
};


/**
 * optional fintekkers.models.position.PositionFilterProto search_security_input = 22;
 * @return {?proto.fintekkers.models.position.PositionFilterProto}
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.prototype.getSearchSecurityInput = function() {
  return /** @type{?proto.fintekkers.models.position.PositionFilterProto} */ (
    jspb.Message.getWrapperField(this, fintekkers_models_position_position_filter_pb.PositionFilterProto, 22));
};


/**
 * @param {?proto.fintekkers.models.position.PositionFilterProto|undefined} value
 * @return {!proto.fintekkers.requests.security.QuerySecurityRequestProto} returns this
*/
proto.fintekkers.requests.security.QuerySecurityRequestProto.prototype.setSearchSecurityInput = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.fintekkers.requests.security.QuerySecurityRequestProto} returns this
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.prototype.clearSearchSecurityInput = function() {
  return this.setSearchSecurityInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.prototype.hasSearchSecurityInput = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional fintekkers.models.util.LocalTimestampProto as_of = 23;
 * @return {?proto.fintekkers.models.util.LocalTimestampProto}
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.prototype.getAsOf = function() {
  return /** @type{?proto.fintekkers.models.util.LocalTimestampProto} */ (
    jspb.Message.getWrapperField(this, fintekkers_models_util_local_timestamp_pb.LocalTimestampProto, 23));
};


/**
 * @param {?proto.fintekkers.models.util.LocalTimestampProto|undefined} value
 * @return {!proto.fintekkers.requests.security.QuerySecurityRequestProto} returns this
*/
proto.fintekkers.requests.security.QuerySecurityRequestProto.prototype.setAsOf = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.fintekkers.requests.security.QuerySecurityRequestProto} returns this
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.prototype.clearAsOf = function() {
  return this.setAsOf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.fintekkers.requests.security.QuerySecurityRequestProto.prototype.hasAsOf = function() {
  return jspb.Message.getField(this, 23) != null;
};


goog.object.extend(exports, proto.fintekkers.requests.security);

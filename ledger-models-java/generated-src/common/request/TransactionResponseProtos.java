// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: requests/transaction/transaction_response.proto

package common.request;

public final class TransactionResponseProtos {
  private TransactionResponseProtos() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_transaction_TransactionResponseProto_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_transaction_TransactionResponseProto_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n/requests/transaction/transaction_respo" +
      "nse.proto\022\013transaction\032$models/transacti" +
      "on/transaction.proto\032.requests/transacti" +
      "on/transaction_request.proto\"\310\001\n\030Transac" +
      "tionResponseProto\022\024\n\014object_class\030\001 \001(\t\022" +
      "\017\n\007version\030\002 \001(\t\022H\n\032create_transaction_r" +
      "equest\030\024 \001(\0132$.transaction.TransactionRe" +
      "questProto\022;\n\024transaction_response\030\036 \003(\013" +
      "2\035.transaction.TransactionProtoB-\n\016commo" +
      "n.requestB\031TransactionResponseProtosP\001b\006" +
      "proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          common.models.transaction.TransactionProtos.getDescriptor(),
          common.request.TransactionRequestProtos.getDescriptor(),
        });
    internal_static_transaction_TransactionResponseProto_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_transaction_TransactionResponseProto_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_transaction_TransactionResponseProto_descriptor,
        new java.lang.String[] { "ObjectClass", "Version", "CreateTransactionRequest", "TransactionResponse", });
    common.models.transaction.TransactionProtos.getDescriptor();
    common.request.TransactionRequestProtos.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}

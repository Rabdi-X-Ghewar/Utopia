export const ABI = {
    "address": "0x903a8c9e37c744674108ea208c81e60ff09d78c612ffa9df78396e99634f8204",
    "name": "Event",
    "friends": [],
    "exposed_functions": [
      {
        "name": "create_event",
        "visibility": "public",
        "is_entry": true,
        "is_view": false,
        "generic_type_params": [],
        "params": [
          "&signer",
          "u64",
          "0x1::string::String",
          "0x1::string::String",
          "u64"
        ],
        "return": []
      },
      {
        "name": "get_events",
        "visibility": "public",
        "is_entry": false,
        "is_view": false,
        "generic_type_params": [],
        "params": [
          "&signer"
        ],
        "return": [
          "vector<0x903a8c9e37c744674108ea208c81e60ff09d78c612ffa9df78396e99634f8204::Event>"
        ]
      },
      {
        "name": "initialize",
        "visibility": "public",
        "is_entry": false,
        "is_view": false,
        "generic_type_params": [],
        "params": [
          "&signer"
        ],
        "return": []
      }
    ],
    "structs": [
      {
        "name": "Event",
        "is_native": false,
        "is_event": false,
        "abilities": [
          "copy",
          "drop",
          "store",
          "key"
        ],
        "generic_type_params": [],
        "fields": [
          {
            "name": "event_id",
            "type": "u64"
          },
          {
            "name": "title",
            "type": "0x1::string::String"
          },
          {
            "name": "description",
            "type": "0x1::string::String"
          },
          {
            "name": "price",
            "type": "u64"
          }
        ]
      },
      {
        "name": "EventCreated",
        "is_native": false,
        "is_event": true,
        "abilities": [
          "copy",
          "drop",
          "store"
        ],
        "generic_type_params": [],
        "fields": [
          {
            "name": "event_id",
            "type": "u64"
          },
          {
            "name": "title",
            "type": "0x1::string::String"
          }
        ]
      },
      {
        "name": "EventStore",
        "is_native": false,
        "is_event": false,
        "abilities": [
          "copy",
          "drop",
          "store",
          "key"
        ],
        "generic_type_params": [],
        "fields": [
          {
            "name": "events",
            "type": "vector<0x903a8c9e37c744674108ea208c81e60ff09d78c612ffa9df78396e99634f8204::Event>"
          }
        ]
      }
    ]
  }
  